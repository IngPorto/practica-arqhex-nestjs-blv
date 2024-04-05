import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraestructureModule } from './infraestructure/infraestructure.module';

@Module({
  imports: [InfraestructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
