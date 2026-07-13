import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService],
  imports: [AuthModule, PrismaModule],
  exports: [SettingsService],
})
export class SettingsModule {}
