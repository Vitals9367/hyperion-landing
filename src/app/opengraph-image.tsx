import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hyperion - Automate Your Agency Growth";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          fontFamily: "Inter",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Effects */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(218,165,32,0.1), rgba(0,0,0,0))",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 50%, rgba(30,86,49,0.15), rgba(0,0,0,0))",
            zIndex: 0,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            padding: "48px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.1)",
              padding: "8px 16px",
              borderRadius: "9999px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                background: "linear-gradient(to right, #eab308, #22c55e)",
                backgroundClip: "text",
                color: "transparent",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Transform Your Agency's Growth
            </span>
          </div>

          {/* Main Heading */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "800px",
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "white",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              <span
                style={{
                  background: "linear-gradient(to right, #eab308, #22c55e)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                80%+ of Your Tasks
              </span>
              <br />
              Automated with AI
            </h1>
            <p
              style={{
                fontSize: 28,
                color: "rgb(161, 161, 170)",
                margin: "0",
                marginTop: "16px",
              }}
            >
              Our AI-powered systems handle your outreach, sales, and client
              management
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "48px",
              padding: "24px",
              background: "rgba(0,0,0,0.3)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {[
              { value: "40%", label: "Faster Lead Response" },
              { value: "2x", label: "Client Onboarding" },
              { value: "10h+", label: "Saved Weekly" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #eab308, #22c55e)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "rgb(161, 161, 170)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await fetch(
            new URL(
              "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYAZ9hiA.woff2",
              "https://fonts.gstatic.com",
            ),
          ).then((res) => res.arrayBuffer()),
        },
      ],
    },
  );
}
