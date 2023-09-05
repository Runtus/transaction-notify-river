export type LoginResponse = {
    rs: 0 | 1,
    token: string,
    secret: string,
    userName: string,
}

export type ForumResponse = {
    rs: 0 | 1,
    errcode: '',
    body: {
        externInfo: {
            padding: string
        }
    },
    list: Array<{
        board_category_id: number,
        board_category_name: string,
        board_category_type: number,
        board_list: Array<{
            // fid
            board_id: number,
            board_name: string,
            description: string,
            board_child: number,
            board_img: string,
            last_posts_date: string,
            board_content: number,
            forumRedirect: string,
            favNum: number,
            td_posts_num: number,
            topic_total_num: number,
            posts_total_num: number,
            is_focus: number
        }>
    }>
}

// 板块
export type BoardResponse = {
    rs: 0 | 1,
    errcode: string,
    classificationType_list: Array<{
        classificationType_id: number,
        classificationType_name: string
    }>,
    list: Array<{
        board_id: number,
        board_name: string,
        topic_id: string,
        type: string,
        title: string,
        user_id: number,
        user_nick_name: string,
        userAvatar: string,
        last_reply_date: string,
        vote: number,
        hot: number,
        hits: number,
        replies: number,
        essence: number,
        top: number,
        status: number,
        subject: string,
        pic_path: string,
        ratio: string
    }>
}