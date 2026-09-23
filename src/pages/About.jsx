import { Link } from 'react-router-dom'
import { Phone, Mail, GraduationCap, Trophy, BookOpen } from 'lucide-react'
import portrait from '../assets/portrait.jpg'

const experiences = [
  ['24.10 - 24.11', '（低碳参赛项目）', '畲灵竹韵——畲族传统织布机创新文创设计', '畲族传统文化文创产品设计，以传统织布机为原型进行现代化结构创新'],
  ['25.05 - 25.06', '（省赛参与项目）', '旋木流光——儿童光影玩具设计', '设计木质摆件与光影结合的儿童益智文创玩具，通过旋转结构实现光影变化，突出互动性、趣味性与美学表达'],
  ['25.06 - 25.10', '（省赛参与项目）', '智能心理疗愈交互灯', '探索智能交互、灯光氛围与心理健康结合的设计方向'],
  ['25.09 - 25.11', '（低碳参赛项目）', '智能儿童踝足矫形器', '针对痉挛型脑瘫儿童家庭困境，打造“AFO鞋一体化”产品，通过原生适配实现日常穿戴中的生理矫正'],
  ['25.11 - 26.02', '（省赛参与项目）', '高原雪山遇险者生命体征保障头盔', '一款充气式安全气囊头盔，专为高海拔山地救援场景设计，其结构轻便且耐用，防护性能强劲'],
  ['25.12 - 26.02', '（省赛参与项目）', '城市街道窨井盖清洁车', '本设计以三段式分层结构解决传统窨井盖清洁作业的风险、维护难、数据散的问题，为市政运维提供专业解决方案'],
  ['26.03 - 26.05', '（省赛参与项目）', '智能桌面陪伴机器人', '该产品针对长期伏案工作、面临持续压力累积与情绪内耗的桌面办公人群设计']
]

export default function About() {
  return (
    <main className="about-page page-fade noise-bg">
      <section className="about-left">
        <div className="name-en about-reveal reveal-1" aria-hidden="true">XIAOXIANG</div>
        <div className="name-cn about-reveal reveal-2">肖湘</div>

        <div className="profile-visual">
          <Link to="/works" className="about-photo-link about-reveal reveal-4" aria-label="查看作品集">
            <div className="portrait-wrap">
              <img src={portrait} alt="肖湘个人肖像" />
              <span className="hover-cue">VIEW WORKS ↗</span>
            </div>
          </Link>

          <Link to="/works" className="about-card-link about-reveal reveal-3" aria-label="查看作品集">
            <div className="info-card">
              <div className="glass-grain" aria-hidden="true" />
              <div className="basic-info">
                <p>出生年月：2005.5.30</p>
                <p>住址：四川·广元·利州区</p>
                <p className="strong">求职意向：工业设计</p>
              </div>

              <div className="contact-list">
                <div className="contact"><Phone size={16} strokeWidth={1.7} />18089553364</div>
                <div className="contact"><Mail size={16} strokeWidth={1.7} />1418414003@qq.com</div>
              </div>

              <hr />

              <div className="info-section">
                <h3><GraduationCap size={20} strokeWidth={1.7} />教育背景 <span>Educational Background</span></h3>
                <p>2023.09 — 至今　浙江科技大学 工业设计专业</p>
              </div>

              <div className="info-section awards">
                <h3><Trophy size={20} strokeWidth={1.7} />荣誉奖项 <span>Honor Awards</span></h3>
                <p>· 工业设计省赛二等奖</p>
                <p>· 工业设计省赛三等奖</p>
                <p>· 低碳创新设计大赛三等奖</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="experience about-reveal reveal-5">
        <h2><span className="section-mark"><BookOpen size={20} strokeWidth={1.45} /></span>项目经历 <em>Project Experience</em></h2>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article key={index} className={`experience-item about-item-reveal item-${index + 1}`}>
              <div className="date">
                <strong>{item[0]}</strong>
                <small>{item[1]}</small>
              </div>
              <div className="experience-copy">
                <h3><span>•</span>{item[2]}</h3>
                <p>{item[3]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
