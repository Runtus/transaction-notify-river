import axios from 'axios';
import { ForumResponse, BoardResponse } from './type'
import { BASE_URL, DEFAULT_HEADERS } from './const'

export const getTransList = (token: string, secret: string) => axios<ForumResponse>({
    url: BASE_URL,
    method: "POST",
    params: {
        r: "forum/forumlist",
        fid: "",
        accessToken: token,
        accessSecret: secret
    },
    headers: {
        ...DEFAULT_HEADERS,
        "Cache-Control": "no-cache"
    }
})

// board
export const getRiverForumList = (boardId: string) => {
    return (token: string, secret: string) => axios<BoardResponse>({
        url: BASE_URL,
        method: "POST",
        params: {
            r: "forum/topiclist",
            isImageList: 1,
            boardId,
            page: 1,
            pageSize: 10,
            accessToken: token,
            accessSecret: secret
        }
    })
}
