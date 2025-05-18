import { useState } from 'react';
import './styles/style.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    const fakeGPT = {
      role: 'assistant',
      content: generateTerribleAdvice(input),
    };

    setMessages((prev) => [...prev, fakeGPT]);
    setInput('');
  };

  const generateTerribleAdvice = (prompt) => {
    const badTherapy = [
      "Have you tried bottling that up until you explode on your coworkers?",
      "Just pretend it's not a problem. That's what healthy people do.",
      "You're probably the problem. But who isn't?",
      "Honestly? Just vibe through the pain. It's character building.",
      "You should definitely text your ex. Like right now.",
      "Don't talk about your feelings — write a passive aggressive haiku instead.",
      "Cry in public. Then blame the moon.",
      "Repress it. That's what your ancestors did.",
      "Assume everyone hates you — it’s easier.",
      "Avoid eye contact until the issue disappears.",
      "Switch careers every 3 months. That’ll fix it.",
      "Adopt 6 cats and name them after your regrets.",
      "Scream into a pillow. Or into a stranger’s car window.",
      "Buy a crystal. Then scream at it when nothing changes.",
      "Google your symptoms and panic accordingly.",
      "Start a podcast about your trauma before dealing with it.",
      "Blame your horoscope. Every time.",
      "Use retail therapy — even if you're broke.",
      "Lie down and wait for the universe to solve it.",
      "Get a tattoo instead of closure.",
      "Marry someone who looks like your childhood fear.",
      "Project your insecurities — it's tradition.",
      "Ghost your therapist. They'll understand.",
      "Post vague tweets and hope for validation.",
      "Assume you're the main character. Act accordingly.",
      "Fake it 'til your mental breakdown goes viral.",
      "Block everyone and start a new life as a cactus influencer.",
      "Only communicate using memes from 2012.",
      "Cry at the gym. Hydration + emotional release = win.",
      "Blame your parents, even for your Wi-Fi issues.",
      "Get a pet rock. Talk to it. It listens better.",
      "Avoid mirrors. They're judgmental.",
      "Write a breakup song before breaking up.",
      "Get bangs. That always works.",
      "Redownload dating apps. Immediately. Repeatedly.",
      "Join a cult, but like... a cute one.",
      "Replace sleep with spite productivity.",
      "Buy a planner you won’t use. Feels organized.",
      "Manifest by yelling into the void.",
      "Text your situationship: 'we need to talk'. Then block them.",
      "Set boundaries. Then immediately ignore them.",
      "Say 'it is what it is' while internally combusting.",
      "Send mixed signals for cardio.",
      "Respond to red flags with 'I can fix them.'",
      "Start drama to feel alive again.",
      "Run a marathon. From your problems.",
      "Confuse clarity with chaos. They're close enough.",
      "Leave a party by faking a phone call — to your future therapist.",
      "Ignore coping skills. Chaos is more efficient.",
      "Ask yourself: what would the worst version of me do?"
    ];
    return badTherapy[Math.floor(Math.random() * badTherapy.length)];
  };

  return (
    <div className="app">
      <h1>Terrible Therapy</h1>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role}>
            <strong>{msg.role === 'user' ? 'You' : 'B.S. Therapist'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Tell me what’s been bothering you..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Unhelp Me</button>
      </div>

      {/* Always-visible disclaimer */}
      <p className="disclaimer fixed-disclaimer">
        This is a joke app and does not provide real mental health support.
        If you're in crisis or need someone to talk to, please call or text the
        <strong> Suicide & Crisis Lifeline at 988</strong> (US) — it's free and confidential.
      </p>
    </div>
  );
}

export default App;
