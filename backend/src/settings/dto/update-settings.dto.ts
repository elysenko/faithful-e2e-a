import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

export class SettingItemDto {
  @ApiProperty({ description: 'Setting key', example: 'MINIO_ENDPOINT' })
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiProperty({ description: 'Setting value', example: 'http://minio:9000' })
  @IsString()
  value: string;
}

export class UpdateSettingsDto {
  @ApiProperty({ type: SettingItemDto, isArray: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SettingItemDto)
  items: SettingItemDto[];
}
