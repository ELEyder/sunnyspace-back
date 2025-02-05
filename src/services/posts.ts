import { db } from '../db/firebase'

import { IPost } from '../interfaces/IPost';
import { IPostForm } from '../interfaces/IPostFrom';

export const getPosts = async () => {
    try {
        const snapshot = await db.collection("posts").get();
        const posts = snapshot.docs.map(doc => {
            const data = doc.data();
          
            if (data.date && data.date._seconds) {
              data.date = new Date(data.date._seconds * 1000);
            }
          
            return { id: doc.id, ...data };
          });
        return posts;
    } catch (error) {
        return({ error: "Error al obtener los posts" });
    }
}

export const createPost = async ( body : IPostForm ) => {
    const file = body.media;
    console.log(file)
    const data: IPost = {
        authorN: "Eyder",
        authorL: "Huayta",
        action: "ha publicado un post",
        content: body.content,
        date: new Date(),
        likes: 0,
        likesD: [],
        comments: 0,
        commentsD: [],
        privacy: body.privacy,
        privacyD: [],
        searchs: 0,
        searchsD: [],
        typeMedia: "image",
        urlMedia: "img/favicon.jpg",
      };
      
    try {
        const docRef = await db.collection('posts').add(data)
        const doc_id = docRef.id
        return { id: doc_id };
    } catch (error) {
        return({ error: "Error al obtener los posts" });
    }
}

export const deletePost = async (postId: string) => {
    try {
        const docRef = db.collection('posts').doc(postId);
        await docRef.delete();
        return { success: true, message: 'Post eliminado correctamente' };
    } catch (error) {
        return { error: 'Error al eliminar el post' };
    }
}