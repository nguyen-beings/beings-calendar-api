import { Module } from '@nestjs/common'
import { CalendarController } from './calendar.controller'
import { CalendarService } from './calendar.service'
import { EventModule } from './event/event.module'

@Module({
    controllers: [CalendarController],
    providers: [CalendarService],
    imports: [EventModule],
})
export class CalendarModule {}
