import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RelatorioModule } from './relatorio/relatorio.module';
import {DatabaseModule } from './common/database.module'

@Module({
  imports: [RelatorioModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
