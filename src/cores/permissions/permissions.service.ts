import { PermissionsDto } from './permissions.dto';
import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Permissions } from './permissions.interface';

@Injectable()
export class PermissionsService {

    constructor(@InjectModel('Permissions') private PermissionModel: Model<Permissions>) { }


    async addPermission(PermissionsDto: PermissionsDto): Promise<PermissionsDto> {
        const permission = new this.PermissionModel(PermissionsDto);
        return permission.save()
    }
}
