import * as Popover from "@radix-ui/react-popover";

export function TokenDistribution() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          token distribution
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              backgroundColor: "white",
              padding: 30,
              borderRadius: 20,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <b>Fixed supply 1.000.000.000:</b>
            <ul style={{ marginLeft: 13 }}>
              <li>150.000.000 Circulo Vicioso community airdrop</li>
              <li>100.000.000 Treasury</li>
              <li>700.000.000 Raydium Pool (burnt LP tokens)</li>
              <li>50.000.000 Burnt</li>
            </ul>
            <b>Total circulating supply: 950.000.000</b>
          </div>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
