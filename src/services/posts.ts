import db from '../db/firebase'

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

export const createPost = async () => {
    try {
        const data = {
            'author': 'xd',
            'action': 'xd',
            'date' : 'xd',
            'content': 'xd',
            'urlMedia': '',
            'typeMedia': '',
            'likes': 0,
            'likesD': [],
            'comments': 0,
            'commentsD': [],
            'searchs': 0,
            'searchsD': [],
            'privacy' : "Public",
            'privacyD' : []
        }
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