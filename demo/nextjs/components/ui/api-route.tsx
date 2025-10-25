"use client";

import React, { JSX, ReactNode, useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { DynamicCodeBlock } from "./dynamic-code-block";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./table";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Send } from "lucide-react";

type Property = {
	isOptional: boolean;
	description: string | null;
	propName: string;
	type: string;
};

const indentationSpace = `    `;

export const APIMethod = ({
  options,
  url
}: {
  options: Property[];
  url: string;
}) => {
  const [return, setReturn] = useState("");

	return (
		<>
    <Card>
      <CardHeader>
        <CardTitle><h1>API Request</h1></CardTitle></CardHeader>
      <CardContent>
        <div>
          <div>
            <div>
              {
                options.map((o) => {
                  return (
                    <input type={o.type} placeholder={o.propName} key={o.propName}/>
                  )
                })
              }
            </div>
            <Button>
              <Send/>
              Send Request
            </Button>
          </div>
          <div>

          </div>
        </div>
      </CardContent>
    </Card>
		</>
	);
};
