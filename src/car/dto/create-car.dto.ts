import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Scale } from '../entities/scale.enum';
import { Fuel } from '../entities/fuel.enum';
import { Type } from 'class-transformer';
import { CarStatus } from '@car/entities/carStatus.enum';

export class CreateCarDto {
  @IsString()
  @ApiProperty({ description: '차량명', example: 'K5' })
  carName: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: '등급' })
  grade?: string;

  @IsEnum(Scale)
  @IsOptional()
  @ApiPropertyOptional({
    description: '차량 분류',
    enum: Scale,
    default: Scale.DEFAULT,
  })
  scale?: Scale;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ description: '연식' })
  carYear?: number;

  @IsString()
  @ApiProperty({ description: '차량번호' })
  carNo: string;

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ description: '가격', example: 23000 })
  price: number;

  @IsString()
  @ApiProperty({ description: '변속기' })
  transmission: string;

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ description: '주행거리' })
  mileage: number;

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ description: '배기량' })
  displacement: number;

  @IsEnum(Fuel)
  @IsOptional()
  @ApiPropertyOptional({
    description: '차량 연료',
    enum: Fuel,
    default: Fuel.DEFAULT,
  })
  fuel?: Fuel;

  @IsOptional()
  @ApiPropertyOptional({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
    description: '차량 이미지(10개 까지 가능)',
    default: null,
  })
  carImgs?: any;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: '추가 사항' })
  memo?: string;

  @IsEnum(CarStatus)
  @IsOptional()
  @ApiPropertyOptional({
    description: '차량 상태',
    enum: CarStatus,
    default: CarStatus.Available,
  })
  carStatus?: CarStatus;
}
