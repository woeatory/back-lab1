import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { RecordModule } from './record/record.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    CategoryModule,
    RecordModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
