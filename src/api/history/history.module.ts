import { Module } from '@nestjs/common'
import { InsightModule } from './insight/insight.module'
import { HistoryController } from './history.controller'

@Module({
    imports: [InsightModule],
    controllers: [HistoryController],
})
export class HistoryModule {}
