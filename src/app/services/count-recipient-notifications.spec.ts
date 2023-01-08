import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRepicientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('some content'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        content: new Content('some content'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        content: new Content('some content'),
        category: 'social',
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRepicientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
