/*
 * Copyright (C) 2022 MineNode
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { MineBuffer } from "../../../../../../native/index";
import { Chat } from "../../../../../utils/Chat";
import { IClientboundMessage } from "../../../Message";

export interface PlayClientboundDisconnectMessageOptions {
  reason: Chat;
}

export class PlayClientboundDisconnectMessage implements IClientboundMessage {
  public id = 0x1a;

  public reason: Chat;

  public constructor(options: PlayClientboundDisconnectMessageOptions) {
    this.reason = options.reason;
  }

  public encode(buffer: MineBuffer): void {
    buffer.writeString(JSON.stringify(this.reason));
  }
}
