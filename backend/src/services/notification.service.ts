import { Notification } from '../types'; // Adjust the import based on your types definition

class NotificationService {
    private notifications: Notification[] = [];

    public createNotification(notification: Notification): Notification {
        this.notifications.push(notification);
        return notification;
    }

    public getNotifications(): Notification[] {
        return this.notifications;
    }

    public deleteNotification(id: string): boolean {
        const index = this.notifications.findIndex(notification => notification.id === id);
        if (index !== -1) {
            this.notifications.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default new NotificationService();