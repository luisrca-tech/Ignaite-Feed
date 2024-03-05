import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"

import './global.css'
import styles from './app.module.css'

// author: { avatar_url: "", name "", role: "",}
// publishedAt: Date,
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {type: "paragraph", content: " Fala galeraa 👋"},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-25 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      {type: "paragraph", content: " Fala galeraa 👋"},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'Link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-15 14:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
     <div className={styles.wrapper}>
      <SideBar />
      <main>
        {posts.map(post => {
          return (
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
     </div>
    </div>
  )
}