// src/types/follow.d.ts

export interface BaseUser {
    id: number
    username: string
    password_hash: string
    created_at: string
}

export interface Follower {
    follower_id: number
    followee_id: number
    created_at: string
    follower: BaseUser
    isFollowingBack?: boolean
}

export interface Followee {
    follower_id: number
    followee_id: number
    created_at: string
    followee: BaseUser
}
