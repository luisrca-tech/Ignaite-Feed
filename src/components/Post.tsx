import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: string | 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post ({author, publishedAt, content}: PostProps) {
  const [comments, setComments] = useState([
    'Fala galera, beleza?'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewInvalidComment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      // Mantém apenas os comentarios que sao !== commentToDelete
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
         <Avatar src={author.avatarUrl}/>
        <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
        </div>
        </div>
        <time title= {publishedDateFormatted} dateTime={publishedAt.toISOString()} >
        {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
      {content.map((line => {
        if(line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>;
        }else if (line.type === 'link') {
          return <p key={line.content}><a href="#">{line.content}</a></p>
        }
      }))}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
         name='comment' 
         value={newCommentText}
         placeholder='Deixe um comentário'
         onChange={handleNewCommentText}
         required
         onInvalid={handleNewInvalidComment}     
        />

       <footer>
       <button type="submit" disabled={isNewCommentEmpty}>
          Publicar
        </button>
       </footer>
       </form>

      <div className={styles.commentList}>
        {comments.map((comment => {
          return(
            <Comment 
              key={comment} 
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        }))}
      </div>
    </article>
  );
}