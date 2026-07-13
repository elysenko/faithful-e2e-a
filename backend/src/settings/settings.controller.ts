import { Body, Controller, Get, Patch } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { SettingsService } from './settings.service';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import { Auth } from 'src/auth/decorators';
import { Role } from '@generated/prisma/client';

@ApiBearerAuth()
@ApiTags('Admin Settings')
@Controller('admin/settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  @ApiOperation({
    summary: 'LIST SETTINGS',
    description:
      'Admin-only endpoint listing service credential keys (postgresql, minio) with masked values and configured status.',
  })
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Auth(Role.admin)
  list() {
    return this.settingsService.list();
  }

  @Patch()
  @ApiOperation({
    summary: 'UPDATE SETTINGS',
    description: 'Admin-only endpoint to upsert key-value setting pairs.',
  })
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Auth(Role.admin)
  update(@Body() dto: UpdateSettingsDto) {
    return this.settingsService.update(dto.items);
  }
}
