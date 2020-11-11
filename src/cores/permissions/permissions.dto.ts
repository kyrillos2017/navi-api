
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PermissionsDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly title: string;
}