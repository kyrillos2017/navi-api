import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { permissions } from './permissions';
import { PermissionsController } from './permissions.controller';
import { PermissionSchema } from './permissions.model';
import { PermissionsService } from './permissions.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Permissions', schema: PermissionSchema }])],
    providers: [PermissionsService],
    exports: [],
    controllers: [PermissionsController],
})
export class PermissionsModule { }