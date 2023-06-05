import {
    getUsersWithChannels,
    getTopLikedVideos,
    getVideosFromSubscription,
    getChannelWithSubscriberCount,
    getTopRatedVideos,
    getSubscriptionsForUser
  } from './queries';
  
  async function runQueries() {
    try {
      // Запит 1: Список усіх користувачів із їхніми каналами
      const usersWithChannels = await getUsersWithChannels();
      console.log('Users with channels:');
      console.log(usersWithChannels);
  
      // Запит 2: Дані про 5 відео, які найбільше сподобалися
      const topLikedVideos = await getTopLikedVideos();
      console.log('Top liked videos:');
      console.log(topLikedVideos);
  
      // Запит 3: Список відео із підписок користувача Stephanie Bulger
      const videosFromSubscription = await getVideosFromSubscription("Stephanie Bulger");
      console.log('Videos from subscription:');
      console.log(videosFromSubscription);
  
      // Запит 4: Дані каналу з ідентифікатором '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76' і кількість його підписників
      const channelWithSubscriberCount = await getChannelWithSubscriberCount("79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76");
      console.log('Channel with subscriber count:');
      console.log(channelWithSubscriberCount);
  
      // Запит 5: Список 10 найбільш оцінюваних відео
      const topRatedVideos = await getTopRatedVideos("01-09-2021");
      console.log('Top rated videos:');
      console.log(topRatedVideos);
  
      // Запит 6: Список даних з підписок користувача Ennis Haestier
      const subscriptionsForUser = await getSubscriptionsForUser("Ennis Haestier");
      console.log('Subscriptions for user:');
      console.log(subscriptionsForUser);
    } catch (error) {
      console.error('Error executing queries:', error);
    } finally {
      // Закриття підключення до бази даних
      // client.end();
    }
  }
  
  runQueries();