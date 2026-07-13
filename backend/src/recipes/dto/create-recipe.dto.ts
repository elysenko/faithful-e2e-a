import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRecipeDto {
  @ApiProperty({
    description: 'Recipe title',
    required: true,
    type: 'string',
    example: 'Sun-Dried Tomato Pasta',
  })
  @IsString()
  @IsNotEmpty({ message: 'title should not be empty' })
  title: string;

  @ApiProperty({
    description: 'List of ingredients, at least one required',
    required: true,
    type: 'string',
    isArray: true,
    example: ['200g penne', '2 cloves garlic', 'Fresh basil'],
  })
  @IsArray()
  @ArrayNotEmpty({ message: 'at least one ingredient is required' })
  @IsString({ each: true })
  ingredients: string[];

  @ApiProperty({
    description: 'Preparation instructions',
    required: true,
    type: 'string',
    example: 'Boil the penne until al dente...',
  })
  @IsString()
  @IsNotEmpty({ message: 'instructions should not be empty' })
  instructions: string;

  @ApiProperty({
    description: 'Whether the recipe is marked as favorite',
    required: false,
    type: 'boolean',
    example: false,
  })
  @IsBoolean()
  @IsOptional()
  isFavorite?: boolean;
}
