import { Controller } from '@nestjs/common';
import { AppService } from '@root/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  //
  // @Get()
  // scheduleTest() {
  //   return this.appService.testSchedule();
  // }
}
