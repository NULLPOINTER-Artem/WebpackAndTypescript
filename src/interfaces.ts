export interface JsonPost {
    id: number;
    userId: number;
    title: string;
    body: string;
};

export interface JsonComment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
};