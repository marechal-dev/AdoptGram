import { Module } from '@nestjs/common';
import { PersistenceModule } from './infra/persistence/persistence.module';
import { HttpModule } from '@Infra/http/http.module';

@Module({
  imports: [PersistenceModule, HttpModule],
})
export class AppModule {}
