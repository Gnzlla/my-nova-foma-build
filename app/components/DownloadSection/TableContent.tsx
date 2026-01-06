import React from "react";

type TableRowProps = {
  label: string;
  values: { icon: string; text: string; color?: string }[];
};

export default function TableRow({ label, values }: TableRowProps) {
  return (
    <div className="flex [&>div]:flex [&>div]:flex-nowrap flex-nowrap [&div>*]:items-center [&>div]:gap-2 bg-(--background) [&>div>*]:mb-1 p-4 md:p-6 [&>div]:w-1/3 font-bold md:text-lg lg:text-xl">
      <div className="font-semibold">{label}</div>
      {values.map((v, i) => (
        <div key={i} className={v.color || "white"}>
          <img src={v.icon} alt="" className="h-7" />
          <span>{v.text}</span>
        </div>
      ))}
    </div>
  );
}
