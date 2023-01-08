import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(repicientId: string): Promise<number>;
  abstract findManyByRecipientId(repicientId: string): Promise<Notification[]>;
}
