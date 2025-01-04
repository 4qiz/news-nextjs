import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupCardType }) => {
  return (
    <li className="startup-card group">
      {/* дата, количество просмотров */}
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>

      {/* имя автора, название, аватар */}
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
          </Link>
          <Link href={`/user/${post.author?._id}`}>
            <Image
              src=""
              alt="user"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* описание */}
      <Link href={`/startup/${post._id}`}>
        <p className="startup-card_desc">{post.description}</p>
        <img src="post.image" alt="image" className="startup-card_img" />
      </Link>

      {/* категория и кнопка*/}
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${post.category?.toLowerCase()}`}>
          <p className="text-16-medium">{post.category}</p>
        </Link>
        <Button asChild className="startup-card_btn">
          <Link href={`/startup/${post._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
