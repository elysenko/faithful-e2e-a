import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/user/entities/user.entity';

@ApiBearerAuth()
@ApiTags('Recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  @ApiOperation({
    summary: 'LIST RECIPES',
    description:
      "Private endpoint to list the authenticated user's recipes. Supports case-insensitive title search via the optional `q` query param.",
  })
  @ApiResponse({ status: 200, description: 'Ok', type: Recipe, isArray: true })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Auth()
  findAll(@GetUser() user: User, @Query('q') q?: string) {
    return this.recipesService.findAll(user.id, q);
  }

  @Post()
  @ApiOperation({
    summary: 'CREATE RECIPE',
    description: 'Private endpoint to create a recipe owned by the authenticated user.',
  })
  @ApiResponse({ status: 201, description: 'Created', type: Recipe })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Auth()
  create(@GetUser() user: User, @Body() dto: CreateRecipeDto) {
    return this.recipesService.create(user.id, dto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'GET RECIPE BY ID',
    description: 'Private endpoint to fetch a single owner-scoped recipe. Returns 404 on miss.',
  })
  @ApiResponse({ status: 200, description: 'Ok', type: Recipe })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @Auth()
  findOne(@GetUser() user: User, @Param('id') id: string) {
    return this.recipesService.findOne(user.id, id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'UPDATE RECIPE',
    description: 'Private endpoint to update an owner-scoped recipe.',
  })
  @ApiResponse({ status: 200, description: 'Ok', type: Recipe })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @Auth()
  update(@GetUser() user: User, @Param('id') id: string, @Body() dto: UpdateRecipeDto) {
    return this.recipesService.update(user.id, id, dto);
  }

  @Patch(':id/favorite')
  @ApiOperation({
    summary: 'TOGGLE FAVORITE',
    description: 'Private endpoint to flip the `isFavorite` flag of an owner-scoped recipe.',
  })
  @ApiResponse({ status: 200, description: 'Ok', type: Recipe })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @Auth()
  toggleFavorite(@GetUser() user: User, @Param('id') id: string) {
    return this.recipesService.toggleFavorite(user.id, id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'DELETE RECIPE',
    description: 'Private endpoint to delete an owner-scoped recipe.',
  })
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @Auth()
  remove(@GetUser() user: User, @Param('id') id: string) {
    return this.recipesService.remove(user.id, id);
  }
}
