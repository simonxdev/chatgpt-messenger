"use client";

import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col justify-between h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Model selection */}</div>

          {/* Map through chat rows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div className="flex flex-col justify-center items-center space-y-2 cursor-default">
          <p className="text-white">Logged in as:</p>
          <div
            className="text-white text-center hover:text-gray-200 hover:opacity-60 transition-all duration-200 ease-out cursor-pointer"
            onClick={() => signOut()}
          >
            <img
              className="w-16 h-16 rounded-full"
              src={session.user?.image!}
              alt={session.user?.name!}
            />
            <p>Logout</p>
          </div>
          <p className="text-white font-semibold">{session.user?.name!}</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
