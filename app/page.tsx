import type { Metadata } from 'next';
import SiteSidebar from './site-sidebar';

export const dynamic = 'force-static';

export const metadata: Metadata = { title: '雪人工坊' };

export default function Home() {
  return (
    <main className="site-shell sketch-shell">
      <SiteSidebar />

      <div className="sketch-content">
        <section className="sketch-section about-section" id="about">
          <header>
            <h2>关于我</h2>
          </header>
          <div className="about-writing-box">
            <p className="about-introduction">
              我的名字是<span className="private-name" role="img" aria-label="名字暂不透露"><i /><i /><i /></span>，当前是剑桥大学工程学生，会在网站上记录一些博客和做过的项目。
            </p>
          </div>
        </section>

        <section className="sketch-section academic-section" id="academic">
          <header>
            <h2>学习经历</h2>
          </header>
          <div className="academic-box">
            <article>
              <div className="academic-row"><strong>剑桥大学</strong><span>2025–2028</span></div>
              <p>BA (Hons) 工程</p>
            </article>
            <article>
              <div className="academic-row"><strong>深圳国际交流书院</strong><span>2021–2025</span></div>
              <p>4A* · 年级排名第二</p>
            </article>
          </div>
        </section>

        <footer className="sketch-footer">
          <span>雪人工坊</span>
          <span>深圳 · UTC+08</span>
          <a href="mailto:1817144508@qq.com" aria-label="发送邮件至 1817144508@qq.com">1817144508@qq.com</a>
          <span>2026</span>
        </footer>
      </div>
    </main>
  );
}
