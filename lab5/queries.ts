import client from './db';

// Запит 1: Список усіх користувачів із їхніми каналами
export async function getUsersWithChannels() {
  const query = `
    SELECT
      users.id AS user_id,
      users.name AS user_name,
      users.avatar_url AS user_avatar,
      channels.photo_url AS channel_photo,
      channels.description AS channel_description,
      channels.created_at AS channel_creation_date
    FROM
      users
    LEFT JOIN
      channels ON users.id = channels.user_id
    ORDER BY
      channels.created_at DESC;
  `;

  try {
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

// Запит 2: Дані про 5 відео, які найбільше сподобалися
export async function getTopLikedVideos() {
  const query = `
    SELECT
      videos.id AS video_id,
      videos.title AS video_title,
      videos.preview_url AS video_preview,
      videos.duration AS video_duration,
      videos.published_at AS video_publish_date
    FROM
      videos
    INNER JOIN
      likes ON videos.id = likes.video_id
    WHERE
      likes.positive = true
    ORDER BY
      likes.created_at DESC
    LIMIT 5;
  `;

  try {
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

// Запит 3: Список відео із підписок користувача Stephanie Bulger
export async function getVideosFromSubscription(name:string) {
  const query = `
    SELECT
      videos.id AS video_id,
      videos.title AS video_title,
      videos.preview_url AS video_preview,
      videos.duration AS video_duration,
      videos.published_at AS video_publish_date
    FROM
      videos
    INNER JOIN
      subscriptions ON videos.channel_id = subscriptions.channel_id
    INNER JOIN
      users ON subscriptions.user_id = users.id
    WHERE
      users.name = '${name}'
    ORDER BY
      videos.published_at DESC;
  `;

  try {
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

// Запит 4: Дані каналу з ідентифікатором '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76' і кількість його підписників
export async function getChannelWithSubscriberCount(id:string) {
  const query = `
    SELECT
      channels.id AS channel_id,
      channels.description AS channel_description,
      channels.photo_url AS channel_photo,
      COUNT(subscriptions.id) AS subscriber_count
    FROM
      channels
    LEFT JOIN
      subscriptions ON channels.id = subscriptions.channel_id
    WHERE
      channels.id = '${id}'
    GROUP BY
      channels.id;
  `;

  try {
    const result = await client.query(query);
    return result.rows[0];
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

// Запит 5: Список 10 найбільш оцінюваних відео
export async function getTopRatedVideos(date:string) {
  const query = `
    SELECT
      videos.id AS video_id,
      videos.title AS video_title,
      COUNT(likes.*) AS rating_count
    FROM
      videos
    INNER JOIN
      likes ON videos.id = likes.video_id
    WHERE
      likes.positive = true
      AND likes.created_at >= '${date}'
    GROUP BY
      videos.id
    HAVING
      COUNT(likes.*) > 4
    ORDER BY
      rating_count DESC
    LIMIT 10;
  `;

  try {
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

// Запит 6: Список даних з підписок користувача Ennis Haestier
export async function getSubscriptionsForUser(name:string) {
  const query = `
    SELECT
      users.name AS channel_name,
      users.avatar_url AS channel_avatar,
      channels.photo_url AS channel_photo,
      channels.description AS channel_description,
      subscriptions.level AS subscription_level,
      subscriptions.subscribed_at AS subscription_date
    FROM
      subscriptions
    INNER JOIN
      channels ON subscriptions.channel_id = channels.id
    INNER JOIN
      users ON channels.user_id = users.id
    WHERE
      users.name = '${name}'
    ORDER BY
      CASE
        WHEN subscriptions.level = 'vip' THEN 1
        WHEN subscriptions.level = 'follower' THEN 2
        WHEN subscriptions.level = 'fan' THEN 3
        WHEN subscriptions.level = 'standard' THEN 4
      END,
      subscriptions.subscribed_at DESC;
  `;

  try {
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}