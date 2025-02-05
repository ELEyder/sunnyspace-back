export interface IPost {
    id?: string;
    authorN: string;
    authorL: string;
    action?: string;
    content: string;
    date: Date;
    likes: number;
    likesD: string[];
    comments: number;
    commentsD: string[];
    privacy: string;
    privacyD: string[];
    searchs: number;
    searchsD: string[];
    typeMedia: string;
    urlMedia: string;
  }
  