import {
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  comments: ChatBubbleBottomCenterTextIcon,
  users: UserGroupIcon,
  posts: DocumentIcon,
};

export default function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-secondary-400/20 shadow-lg hover:shadow-xl transition">
      <div className="flex items-center justify-center gap-2 p-4 text-secondary-900/80">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p
        className="truncate rounded-b-2xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 
               px-4 py-8 text-center text-3xl font-semibold text-white"
      >
        {value}
      </p>
    </div>
  );
}
