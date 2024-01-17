import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,

  prepareHeaders: (headers, { getState }) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJodHRwczovL2RpdmVycC5nbG9iYWxob3N0LmF6L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzA1NDg1MjMzLCJleHAiOjE3MDU0ODg4MzMsIm5iZiI6MTcwNTQ4NTIzMywianRpIjoibDdMNldMS2ttVnZXRkhScSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.tggh8kqH3hxsQmlWAau-9k0aHoBfQe2gIXYKijwAlz2EBZoAhxKodtTgZxsI5WT6HCgY4xTDNc_PRVudI6xtZOvWnhNayrsUytcS8oGHDfoyRbien6scCiY9OwAmhDb2eSPbcX1l_Ic1eg7bzYfwwr1HYUU-sqv3c2WeXuybpEA6hRGp86QPb-va_1TP5VGaUlZ1vMLvbm-2b7SNVlG7mOUTRtIsJbGLBq11vgqUdxeNhXtKHEkP0vF8sQNEeSVUX8w8zVBt1AcuP38qe5Pi1Z2-MsqInQUfyJ-Uhg4TcF8a-d5Hg_Tl17i6QOHb81Dl3pAnhp49vIuItCT3nHA-QjDBJ3Bb9du9IAQpbtPPo1mjjNQU7yk3_Vq1c1u_ORUeWIWPxnUwwRNA-igRclP5h82DEfjE4x9U79VMxXDblvJkKVFcrAkafdSOa6lp-xul8L-qORQ1cHnXbhYo_FFZ52U9_yXU0yMCZFFQnteDZT1Yzed3zbBJhAP0IXXMjZ8bKztX9agkLFVjfoIzzJmCyexOSJ5FOQs_yPkNW28wyzog69FSmFI-gE2msTnmx_--uqAuIrAJlpL8MAqi8_GhmOITNqhJSljsxBq4LyDXMG_ttkUnvl9VLSp_sOxB_5TaacV0Y9iJz2FsAfVvPt-8-eq1Axin8TNkf2S2p-ugO3c";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});
