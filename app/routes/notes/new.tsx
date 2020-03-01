import * as React from "react";
import { Form, json, redirect, useActionData } from "remix";
import type { ActionFunction } from "remix";
import Alert from "@reach/alert";

import { createNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

type ActionData = {
  errors?: {
    title?: string;
    body?: string;
  };
};

export co