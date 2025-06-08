import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('')
  @Render('dashboard')
  showDashboardPage() {
    return { title: 'dashboard' };
  }

  @Get('/appointment')
  @Render('appointment')
  showAppointmentPage() {
    return { title: 'appointment' };
  }

} 
