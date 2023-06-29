import { User } from './users.model'

// let currentUserId = 0 // Initial user ID

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}
export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')

  // increment by 1
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId

  // currentUserId++;
  // return `user${currentUserId.toString().padStart(5, '0')}`;
}
