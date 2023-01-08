import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { KafkaConsumerService } from './kafka-consumer.service';
import { SendNotification } from '@app/services/send-notification';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
