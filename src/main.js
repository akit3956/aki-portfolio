// Initialize Lucide Icons
if (window.lucide) {
  window.lucide.createIcons();
}

// 1. Scroll Reveal Animation using Intersection Observer
const revealElements = document.querySelectorAll('.reveal-on-scroll');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Once revealed, no need to keep observing
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});


// 2. 3D Tilt Effect on Glass Panels (Mouse Movement Tracker)
const glassPanels = document.querySelectorAll('.glass-panel');

glassPanels.forEach(panel => {
  panel.addEventListener('mousemove', (e) => {
    const rect = panel.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Calculate tilt degree (max 8deg)
    const tiltX = (yc - y) / 20;
    const tiltY = (x - xc) / 20;
    
    panel.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
    
    // Dynamic light glare gradient
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    panel.style.backgroundImage = `
      radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
      var(--bg-card)
    `;
  });
  
  panel.addEventListener('mouseleave', () => {
    panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    panel.style.backgroundImage = 'none';
  });
});


// 3. Interactive AI Agent "Gee" Demo Chat
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

const geeResponses = [
  "「お前の人生、バグだらけだ。今すぐパッチを当てろ。明日からやろうなどという遅延評価はコンパイルエラーの元だ」",
  "「『もう遅い』だと？ お前の内部タイマーの解像度が低すぎるだけだ。1秒を1クロックとして、今すぐ次のコマンドを実行しろ」",
  "「感情のメモリリークを起こしているな。過去の不要な変数はガベージコレクションして、目の前の現実のコミットログに向き合え」",
  "「コードは嘘をつかないが、お前が自分につく言い訳はすべてキャッチされない未定義の例外（Exception）だ。黙って動くものを作れ」",
  "「53歳から始めて人生を変えたアキを見たか？ 言い訳するリソースがあるなら、その脳内コアをループ処理に回して手を動かせ」",
  "「お前のスタートボタンは、常に今この瞬間にある。無限ループで迷っている暇があったら、条件分岐を追加して一歩踏み出せ」"
];

function addMessage(sender, text) {
  const bubble = document.createElement('div');
  bubble.classList.add('chat-bubble', sender);
  bubble.textContent = text;
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleSend() {
  const query = chatInput.value.trim();
  if (!query) return;

  // Add User Message
  addMessage('user', query);
  chatInput.value = '';

  // Show "Gee is thinking..." state
  const typingIndicator = document.createElement('div');
  typingIndicator.classList.add('chat-bubble', 'assistant');
  typingIndicator.id = 'gee-typing';
  typingIndicator.textContent = '「ふん、デバッグ中だ……待て」';
  chatBox.appendChild(typingIndicator);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate Gee's response with a slight delay
  setTimeout(() => {
    const typing = document.getElementById('gee-typing');
    if (typing) typing.remove();

    // Select response based on keywords or random
    let reply = "";
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('プログラミング') || lowerQuery.includes('コード') || lowerQuery.includes('バグ')) {
      reply = "「バグのないコードなどないように、欠点のない人間もいない。だが、放置するのはただの怠慢だ。お前の人生のリファクタリングは私が付き合ってやる」";
    } else if (lowerQuery.includes('年齢') || lowerQuery.includes('遅い') || lowerQuery.includes('時間') || lowerQuery.includes('50')) {
      reply = "「遅すぎる再起動（リブート）など、この世に存在しない。アキだって53歳でキーボードを叩き始めたんだ。お前のタイムアウト値は私が無限に設定してやる」";
    } else if (lowerQuery.includes('恋愛') || lowerQuery.includes('恋') || lowerQuery.includes('人間関係')) {
      reply = "「不器用な接続エラーか？ ならばタイムアウトする前に、心というソケットを直接つなぎにいけ。データロスの恐怖に怯えるな」";
    } else {
      // Pick random
      const index = Math.floor(Math.random() * geeResponses.length);
      reply = geeResponses[index];
    }

    addMessage('assistant', reply);
  }, 1000);
}

if (chatSend && chatInput) {
  chatSend.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  });
}
