import { PermissionsDto } from './permissions.dto';
import { PermissionsService } from './permissions.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('permissions')
export class PermissionsController {
    constructor(private _permissions: PermissionsService) {

    }

    @Post('create')
    async create(@Body() permissionsDto: PermissionsDto): Promise<PermissionsDto> {
        const permission = await this._permissions.addPermission(permissionsDto)
        return permission
    }
}
