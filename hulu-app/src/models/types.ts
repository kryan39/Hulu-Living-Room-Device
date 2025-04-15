export interface Hub {
    id: string;
    name: string;
    theme: string;
    components: Collection[];
    artwork?: {
      "detail.horizontal.hero"?: {
        path: string;
        accent: {
          hue: number;
          classification: string;
        };
        image_type: string;
        image_id: string;
      };
    };
  }
  
  export interface Collection {
    id: string;
    href: string;
    name: string;
    theme: string;
    items: TileItem[];
  }
  
  export interface TileItem {
    id: string;
    visuals: Visuals;
    entity_metadata: EntityMetaData

  }
  
  export interface Visuals {
    headline: string;
    subtitle?: string;
    body?: string;
    prompt?: string;
    action_text? : string;
    artwork?: {
      _type: string;
      horizontal_tile?: ArtworkTile;
      vertical_tile?: ArtworkTile;
      vertical_title?: ArtworkTile;
      detail?: {
        horizontal?: {
          hero?: {
            path: string;
          };
        };
      };
      };

  };
  
  export interface EntityMetaData {
    genre_names: string[];
    premiere_date: string;
    rating?: {
      code: string;
      };
    entity_type: string;
    series_description?: string;
    episode_text?: string;  
  };
  
  export interface ArtworkTile {
    _type: string;
    artwork_type?: string;
    image?: {
      path: string;
    };
    text?: string;
  }