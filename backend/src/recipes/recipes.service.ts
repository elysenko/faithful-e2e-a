import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

@Injectable()
export class RecipesService {
  private readonly logger = new Logger('RecipesService');

  constructor(private prisma: PrismaService) {}

  async findAll(ownerId: string, q?: string) {
    try {
      return await this.prisma.recipe.findMany({
        where: {
          ownerId,
          ...(q && q.trim()
            ? { title: { contains: q.trim(), mode: 'insensitive' } }
            : {}),
        },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      this.logger.error(`GET recipes: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  async findOne(ownerId: string, id: string) {
    const recipe = await this.prisma.recipe.findFirst({
      where: { id, ownerId },
    });
    if (!recipe) throw new NotFoundException('Recipe not found');
    return recipe;
  }

  async create(ownerId: string, dto: CreateRecipeDto) {
    try {
      return await this.prisma.recipe.create({
        data: {
          ownerId,
          title: dto.title,
          ingredients: dto.ingredients,
          instructions: dto.instructions,
          isFavorite: dto.isFavorite ?? false,
        },
      });
    } catch (error) {
      this.logger.error(`POST recipes: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  async update(ownerId: string, id: string, dto: UpdateRecipeDto) {
    // Ensures the recipe exists and belongs to the owner (throws 404 otherwise)
    await this.findOne(ownerId, id);

    try {
      return await this.prisma.recipe.update({
        where: { id },
        data: {
          ...(dto.title !== undefined ? { title: dto.title } : {}),
          ...(dto.ingredients !== undefined ? { ingredients: dto.ingredients } : {}),
          ...(dto.instructions !== undefined ? { instructions: dto.instructions } : {}),
          ...(dto.isFavorite !== undefined ? { isFavorite: dto.isFavorite } : {}),
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException('Recipe not found');
      }
      this.logger.error(`PATCH recipes: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  async toggleFavorite(ownerId: string, id: string) {
    const recipe = await this.findOne(ownerId, id);
    try {
      return await this.prisma.recipe.update({
        where: { id },
        data: { isFavorite: !recipe.isFavorite },
      });
    } catch (error) {
      this.logger.error(`PATCH recipes/favorite: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }

  async remove(ownerId: string, id: string) {
    // Ensures ownership before deleting (throws 404 otherwise)
    await this.findOne(ownerId, id);

    try {
      await this.prisma.recipe.delete({ where: { id } });
      return { message: 'Recipe deleted' };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException('Recipe not found');
      }
      this.logger.error(`DELETE recipes: error: ${error}`);
      throw new InternalServerErrorException('Server error');
    }
  }
}
