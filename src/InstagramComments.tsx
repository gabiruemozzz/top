// GH-ELEVATE EX++ ™ — Instagram-style social proof overlay
// Mobile-only. After 20s of browsing, a discreet card slides up from the
// bottom of the screen offering to view Instagram comments. Tapping opens
// a full-screen Instagram-styled bottom sheet with authentic comments.

import { useEffect, useState } from 'react';

interface Reply {
  id: number;
  username: string;
  avatar: string;
  text: string;
  time: string;
  verified: boolean;
}

interface Comment {
  id: number;
  username: string;
  avatar: string;
  text: string;
  time: string;
  verified: boolean;
  likes?: number;
  replies?: Reply[];
}

const BRAND_HANDLE = 'ghelevateex.official'; // ex: aurevia.official
const BRAND_AVATAR = 'https://placehold.co/200x200/0D1B2A/FFFFFF?text=ghe';

// Parametrized comments — generated from advertorial_page.instagram_comments
// of plano.json. Replace these with your own customer quotes via the JSON editor.
const COMMENTS: Comment[] = [{"id":1,"username":"jess_morrow","avatar":"https://i.pravatar.cc/150?img=49","text":"omggg 😭😭","time":"2 d","verified":false,"likes":47},{"id":2,"username":"lindahar.42","avatar":"https://i.pravatar.cc/150?img=10","text":"wait does this actually work on the neck?? mine is killing me","time":"2 d","verified":false,"likes":23,"replies":[{"id":201,"username":"ghelevateex.official","avatar":"https://placehold.co/200x200/6B8E7F/FFFFFF?text=B","text":"@lindahar.42 yes!! the neck is one of the most common areas our customers see results 💛","time":"2 d","verified":true}]},{"id":3,"username":"rachelll.k","avatar":"https://i.pravatar.cc/150?img=20","text":"lowkey thought this was just another tiktok thing but ok i’m a believer now","time":"3 d","verified":false,"likes":89},{"id":4,"username":"mariposa_77","avatar":"https://i.pravatar.cc/150?img=24","text":"where is that earring from 😍","time":"3 d","verified":false,"likes":12},{"id":5,"username":"sandra_l","avatar":"https://i.pravatar.cc/150?img=45","text":"okay but does it feel sticky? i hate sticky serums","time":"3 d","verified":false,"likes":34},{"id":6,"username":"taylor.ng","avatar":"https://i.pravatar.cc/150?img=32","text":"just got this for my mom for mother’s day she’s gonna lose it","time":"4 d","verified":false,"likes":156},{"id":7,"username":"kbailey88","avatar":"https://i.pravatar.cc/150?img=21","text":"saving this 🤍","time":"4 d","verified":false},{"id":8,"username":"pamela.h","avatar":"https://i.pravatar.cc/150?img=48","text":"idk what it is but my friends keep telling me i look rested?? been using this every night for a month","time":"5 d","verified":false,"likes":203},{"id":9,"username":"donnaharper55","avatar":"https://i.pravatar.cc/150?img=23","text":"my husband asked what i’ve been using and that’s when i knew","time":"6 d","verified":false,"likes":412},{"id":10,"username":"lyndsey_v","avatar":"https://i.pravatar.cc/150?img=40","text":"need","time":"1 w","verified":false,"likes":7},{"id":11,"username":"helena_m","avatar":"https://i.pravatar.cc/150?img=14","text":"i’m almost 70 and was pretty much over trying new things. glad i didn’t skip this 🥹","time":"1 w","verified":false,"likes":287},{"id":12,"username":"val.kingston","avatar":"https://i.pravatar.cc/150?img=42","text":"absorbs in like 30 seconds. obsessed","time":"1 w","verified":false,"likes":51},{"id":13,"username":"kim_oconnor","avatar":"https://i.pravatar.cc/150?img=18","text":"idk who needs to hear this but please just try it","time":"2 w","verified":false,"likes":145},{"id":14,"username":"liz.rmrz","avatar":"https://i.pravatar.cc/150?img=35","text":"caught my husband stealing mine 💀 had to order him his own","time":"2 w","verified":false,"likes":198},{"id":15,"username":"rose.b","avatar":"https://i.pravatar.cc/150?img=16","text":"if you’re still reading and haven’t ordered yet... what are you waiting for 🤍","time":"6 mo","verified":false,"likes":422}];

const TOTAL_COUNT = '4,287';

// ─────────────────────────────────────────────────────────────────────────────
// Visual primitives
// ─────────────────────────────────────────────────────────────────────────────

function VerifiedBadge() {
  return (
    <div className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg className="w-4 h-4" fill={filled ? '#ED4956' : 'none'} stroke={filled ? '#ED4956' : 'currentColor'} strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function InstagramGlyph({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Trigger card — slides up from the bottom of the screen
// ─────────────────────────────────────────────────────────────────────────────

function TriggerCard({ onOpen, onDismiss }: { onOpen: () => void; onDismiss: () => void }) {
  return (
    <div
      className="md:hidden fixed left-3 right-3 z-[55] animate-slide-up-card"
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 78px)' }}
    >
      <button
        onClick={onOpen}
        className="w-full bg-white rounded-2xl shadow-2xl border border-neutral-200 px-4 py-3 flex items-center gap-3 text-left active:scale-[0.98] transition-transform"
        aria-label="View Instagram comments"
      >
        <div className="flex -space-x-2 flex-shrink-0">
          {COMMENTS.slice(0, 3).map((c) => (
            <img key={c.id} src={c.avatar} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover bg-neutral-200" />
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <InstagramGlyph className="w-3.5 h-3.5 text-brand-text-light" />
            <span className="text-[10px] uppercase tracking-widest text-brand-text-light font-semibold">
              From Instagram
            </span>
          </div>
          <p className="text-sm font-semibold text-brand-text leading-tight truncate">
            See what real customers are saying
          </p>
        </div>

        <span className="flex-shrink-0 text-brand-primary font-semibold text-xs">
          View →
        </span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDismiss();
        }}
        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-text text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform"
        aria-label="Dismiss"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

function CommentRow({ comment, isReply = false }: { comment: Comment | Reply; isReply?: boolean }) {
  const [liked, setLiked] = useState(false);
  const baseLikes = ('likes' in comment && comment.likes) ? comment.likes : 0;
  const displayLikes = liked ? baseLikes + 1 : baseLikes;

  return (
    <div className={`flex gap-3 ${isReply ? 'pl-3' : ''}`}>
      <img
        src={comment.avatar}
        alt={comment.username}
        className={`${isReply ? 'w-7 h-7' : 'w-9 h-9'} rounded-full flex-shrink-0 object-cover bg-gray-700`}
        loading="lazy"
      />
      <div className="flex-1 min-w-0 pr-2">
        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
          <span className="text-white font-semibold text-sm">{comment.username}</span>
          {comment.verified && <VerifiedBadge />}
          <span className="text-gray-400 text-xs">{comment.time}</span>
        </div>
        <p className="text-white text-sm leading-relaxed break-words">{comment.text}</p>
        {displayLikes > 0 && (
          <p className="text-gray-400 text-xs mt-1.5 font-semibold">{displayLikes.toLocaleString('en-US')} likes</p>
        )}
      </div>
      <button
        onClick={() => setLiked((p) => !p)}
        className="self-start pt-1 text-gray-400 hover:text-white transition-colors flex-shrink-0"
        aria-label="Like"
      >
        <HeartIcon filled={liked} />
      </button>
    </div>
  );
}

function CommentItem({ comment }: { comment: Comment }) {
  const [showReplies, setShowReplies] = useState(false);
  const replyCount = comment.replies?.length ?? 0;

  return (
    <div className="space-y-3">
      <CommentRow comment={comment} />
      {replyCount > 0 && (
        <div className="pl-12">
          {!showReplies ? (
            <button
              onClick={() => setShowReplies(true)}
              className="text-gray-400 text-xs font-semibold flex items-center gap-2 py-1"
            >
              <span className="w-6 h-px bg-gray-600 inline-block" />
              View {replyCount === 1 ? 'reply' : `${replyCount} replies`}
            </button>
          ) : (
            <div className="space-y-3">
              {comment.replies!.map((reply) => (
                <CommentRow key={reply.id} comment={reply} isReply />
              ))}
              <button
                onClick={() => setShowReplies(false)}
                className="text-gray-400 text-xs font-semibold flex items-center gap-2 py-1"
              >
                <span className="w-6 h-px bg-gray-600 inline-block" />
                Hide replies
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CommentSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const visibleComments = COMMENTS.slice(0, visibleCount);
  const hasMore = visibleCount < COMMENTS.length;

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="md:hidden fixed inset-0 z-[70]" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 animate-fade-in" onClick={onClose} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 bg-black rounded-t-2xl max-h-[88vh] flex flex-col animate-slide-up-sheet">
        <div className="flex justify-center pt-2 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-neutral-700" />
        </div>

        <div className="px-4 pb-3 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <button onClick={onClose} className="text-white text-2xl leading-none w-8 h-8 -ml-1 flex items-center" aria-label="Close">←</button>
            <div className="text-center">
              <div className="text-white font-semibold text-sm">Posts</div>
              <div className="text-gray-400 text-xs flex items-center justify-center gap-1">
                {BRAND_HANDLE}
                <VerifiedBadge />
              </div>
            </div>
            <div className="w-8" />
          </div>

          <div className="text-white text-sm">
            <div className="font-semibold mb-1">12.4k likes</div>
            <p className="leading-relaxed">
              <span className="font-semibold">{BRAND_HANDLE}</span>{' '}
              we asked you to share your stories and the comments are making us cry 🥹💛 thank you for trusting us
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold text-base">Comments</h2>
            <span className="text-gray-400 text-sm">{TOTAL_COUNT}</span>
          </div>

          <div className="space-y-5 pb-8">
            {visibleComments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
            {hasMore && (
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 10, COMMENTS.length))}
                className="flex items-center justify-center w-full py-3 group"
                aria-label="Load more comments"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-gray-300 transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-gray-300 transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-gray-300 transition-colors" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InstagramComments() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [triggerState, setTriggerState] = useState<'pending' | 'visible' | 'dismissed'>('pending');

  useEffect(() => {
    const t = setTimeout(() => {
      setTriggerState((prev) => (prev === 'pending' ? 'visible' : prev));
    }, 20000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {triggerState === 'visible' && !sheetOpen && (
        <TriggerCard
          onOpen={() => { setSheetOpen(true); setTriggerState('dismissed'); }}
          onDismiss={() => setTriggerState('dismissed')}
        />
      )}
      <CommentSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </>
  );
}
