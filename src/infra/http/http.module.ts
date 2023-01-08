import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/app/services/send-notification';
import { CancelNotification } from '@app/services/cancel-notification';
import { CountRecipientNotifications } from '@app/services/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/services/get-recipient-notifications';
import { ReadNotification } from '@app/services/read-notification';
import { UnreadNotification } from '@app/services/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
