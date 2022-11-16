import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { RecordModule } from './record/record.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, CategoryModule, RecordModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
