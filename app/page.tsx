export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
          Nelorix
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          个人独立站点 · 基于 Next.js + Tailwind CSS 构建
        </p >

        {/* 新增跳转工业网站按钮 */}
        <a
          href=" "
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-12"
        >
          查看 IndusCorp 工业设备网站
        </a >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg text-slate-800 mb-2">关于我</h3>
            <p className="text-slate-500 text-sm">记录日常、技术笔记与个人想法</p >
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg text-slate-800 mb-2">技术博客</h3>
            <p className="text-slate-500 text-sm">前端开发、Next.js 实践经验分享</p >
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg text-slate-800 mb-2">项目展示</h3>
            <p className="text-slate-500 text-sm">收录独立开发的各类开源小项目</p >
          </div>
        </div>
        <footer className="mt-20 text-sm text-slate-400">
          © 2026 Nelorix · All rights reserved
        </footer>
      </div>
    </main>
  );
}
